import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo6Component } from './lib19-demo6.component';

describe('Lib19Demo6Component', () => {
  let component: Lib19Demo6Component;
  let fixture: ComponentFixture<Lib19Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
