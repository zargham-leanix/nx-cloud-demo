import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo13Component } from './lib22-demo13.component';

describe('Lib22Demo13Component', () => {
  let component: Lib22Demo13Component;
  let fixture: ComponentFixture<Lib22Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
