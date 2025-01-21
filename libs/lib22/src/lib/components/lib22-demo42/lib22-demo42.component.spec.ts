import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo42Component } from './lib22-demo42.component';

describe('Lib22Demo42Component', () => {
  let component: Lib22Demo42Component;
  let fixture: ComponentFixture<Lib22Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
