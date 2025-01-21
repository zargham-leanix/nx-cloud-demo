import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo6Component } from './lib14-demo6.component';

describe('Lib14Demo6Component', () => {
  let component: Lib14Demo6Component;
  let fixture: ComponentFixture<Lib14Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
