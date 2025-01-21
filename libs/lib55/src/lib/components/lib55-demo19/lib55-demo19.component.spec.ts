import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo19Component } from './lib55-demo19.component';

describe('Lib55Demo19Component', () => {
  let component: Lib55Demo19Component;
  let fixture: ComponentFixture<Lib55Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
