import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo19Component } from './lib52-demo19.component';

describe('Lib52Demo19Component', () => {
  let component: Lib52Demo19Component;
  let fixture: ComponentFixture<Lib52Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
