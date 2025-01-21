import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo6Component } from './lib13-demo6.component';

describe('Lib13Demo6Component', () => {
  let component: Lib13Demo6Component;
  let fixture: ComponentFixture<Lib13Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
