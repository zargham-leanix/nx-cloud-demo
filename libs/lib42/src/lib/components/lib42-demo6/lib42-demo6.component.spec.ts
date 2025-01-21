import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo6Component } from './lib42-demo6.component';

describe('Lib42Demo6Component', () => {
  let component: Lib42Demo6Component;
  let fixture: ComponentFixture<Lib42Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
