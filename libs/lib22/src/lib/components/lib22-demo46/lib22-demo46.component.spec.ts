import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo46Component } from './lib22-demo46.component';

describe('Lib22Demo46Component', () => {
  let component: Lib22Demo46Component;
  let fixture: ComponentFixture<Lib22Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
