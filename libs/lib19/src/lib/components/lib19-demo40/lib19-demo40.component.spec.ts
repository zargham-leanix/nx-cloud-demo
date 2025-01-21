import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo40Component } from './lib19-demo40.component';

describe('Lib19Demo40Component', () => {
  let component: Lib19Demo40Component;
  let fixture: ComponentFixture<Lib19Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
