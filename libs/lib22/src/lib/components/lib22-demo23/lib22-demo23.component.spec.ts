import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo23Component } from './lib22-demo23.component';

describe('Lib22Demo23Component', () => {
  let component: Lib22Demo23Component;
  let fixture: ComponentFixture<Lib22Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
