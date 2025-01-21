import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo11Component } from './lib22-demo11.component';

describe('Lib22Demo11Component', () => {
  let component: Lib22Demo11Component;
  let fixture: ComponentFixture<Lib22Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
