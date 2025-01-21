import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo17Component } from './lib22-demo17.component';

describe('Lib22Demo17Component', () => {
  let component: Lib22Demo17Component;
  let fixture: ComponentFixture<Lib22Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
