import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo35Component } from './lib22-demo35.component';

describe('Lib22Demo35Component', () => {
  let component: Lib22Demo35Component;
  let fixture: ComponentFixture<Lib22Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
