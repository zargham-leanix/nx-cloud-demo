import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo43Component } from './lib22-demo43.component';

describe('Lib22Demo43Component', () => {
  let component: Lib22Demo43Component;
  let fixture: ComponentFixture<Lib22Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
