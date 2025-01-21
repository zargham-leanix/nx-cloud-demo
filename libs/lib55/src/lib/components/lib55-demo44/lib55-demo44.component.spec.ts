import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo44Component } from './lib55-demo44.component';

describe('Lib55Demo44Component', () => {
  let component: Lib55Demo44Component;
  let fixture: ComponentFixture<Lib55Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
