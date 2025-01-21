import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo14Component } from './lib64-demo14.component';

describe('Lib64Demo14Component', () => {
  let component: Lib64Demo14Component;
  let fixture: ComponentFixture<Lib64Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
