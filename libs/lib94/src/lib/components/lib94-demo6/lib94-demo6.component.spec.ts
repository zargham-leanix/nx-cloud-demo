import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo6Component } from './lib94-demo6.component';

describe('Lib94Demo6Component', () => {
  let component: Lib94Demo6Component;
  let fixture: ComponentFixture<Lib94Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
