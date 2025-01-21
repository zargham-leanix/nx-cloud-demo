import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo31Component } from './lib22-demo31.component';

describe('Lib22Demo31Component', () => {
  let component: Lib22Demo31Component;
  let fixture: ComponentFixture<Lib22Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
