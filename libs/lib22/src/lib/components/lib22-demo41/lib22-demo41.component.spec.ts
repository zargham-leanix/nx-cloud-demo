import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo41Component } from './lib22-demo41.component';

describe('Lib22Demo41Component', () => {
  let component: Lib22Demo41Component;
  let fixture: ComponentFixture<Lib22Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
