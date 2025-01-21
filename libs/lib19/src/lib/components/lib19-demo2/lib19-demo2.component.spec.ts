import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo2Component } from './lib19-demo2.component';

describe('Lib19Demo2Component', () => {
  let component: Lib19Demo2Component;
  let fixture: ComponentFixture<Lib19Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
