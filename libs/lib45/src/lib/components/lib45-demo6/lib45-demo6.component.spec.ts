import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo6Component } from './lib45-demo6.component';

describe('Lib45Demo6Component', () => {
  let component: Lib45Demo6Component;
  let fixture: ComponentFixture<Lib45Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
