import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo14Component } from './lib54-demo14.component';

describe('Lib54Demo14Component', () => {
  let component: Lib54Demo14Component;
  let fixture: ComponentFixture<Lib54Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
