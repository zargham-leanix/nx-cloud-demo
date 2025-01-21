import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo6Component } from './lib24-demo6.component';

describe('Lib24Demo6Component', () => {
  let component: Lib24Demo6Component;
  let fixture: ComponentFixture<Lib24Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
