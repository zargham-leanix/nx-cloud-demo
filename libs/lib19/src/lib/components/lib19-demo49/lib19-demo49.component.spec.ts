import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo49Component } from './lib19-demo49.component';

describe('Lib19Demo49Component', () => {
  let component: Lib19Demo49Component;
  let fixture: ComponentFixture<Lib19Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
