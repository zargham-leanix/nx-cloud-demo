import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo33Component } from './lib19-demo33.component';

describe('Lib19Demo33Component', () => {
  let component: Lib19Demo33Component;
  let fixture: ComponentFixture<Lib19Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
