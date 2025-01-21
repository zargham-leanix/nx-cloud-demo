import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo6Component } from './lib23-demo6.component';

describe('Lib23Demo6Component', () => {
  let component: Lib23Demo6Component;
  let fixture: ComponentFixture<Lib23Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
