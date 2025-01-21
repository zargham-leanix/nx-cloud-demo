import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo14Component } from './lib22-demo14.component';

describe('Lib22Demo14Component', () => {
  let component: Lib22Demo14Component;
  let fixture: ComponentFixture<Lib22Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
