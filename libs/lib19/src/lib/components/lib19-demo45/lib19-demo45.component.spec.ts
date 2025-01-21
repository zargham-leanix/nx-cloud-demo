import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo45Component } from './lib19-demo45.component';

describe('Lib19Demo45Component', () => {
  let component: Lib19Demo45Component;
  let fixture: ComponentFixture<Lib19Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
