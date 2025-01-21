import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo32Component } from './lib22-demo32.component';

describe('Lib22Demo32Component', () => {
  let component: Lib22Demo32Component;
  let fixture: ComponentFixture<Lib22Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
