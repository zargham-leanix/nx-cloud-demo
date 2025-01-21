import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo44Component } from './lib88-demo44.component';

describe('Lib88Demo44Component', () => {
  let component: Lib88Demo44Component;
  let fixture: ComponentFixture<Lib88Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
