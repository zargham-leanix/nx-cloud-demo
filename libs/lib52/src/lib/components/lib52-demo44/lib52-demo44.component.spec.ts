import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo44Component } from './lib52-demo44.component';

describe('Lib52Demo44Component', () => {
  let component: Lib52Demo44Component;
  let fixture: ComponentFixture<Lib52Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
