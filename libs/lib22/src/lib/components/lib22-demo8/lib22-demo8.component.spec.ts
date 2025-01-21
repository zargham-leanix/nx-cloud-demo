import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo8Component } from './lib22-demo8.component';

describe('Lib22Demo8Component', () => {
  let component: Lib22Demo8Component;
  let fixture: ComponentFixture<Lib22Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
