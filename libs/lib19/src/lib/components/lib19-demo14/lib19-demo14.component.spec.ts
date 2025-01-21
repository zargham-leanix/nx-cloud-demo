import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo14Component } from './lib19-demo14.component';

describe('Lib19Demo14Component', () => {
  let component: Lib19Demo14Component;
  let fixture: ComponentFixture<Lib19Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
