import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo10Component } from './lib22-demo10.component';

describe('Lib22Demo10Component', () => {
  let component: Lib22Demo10Component;
  let fixture: ComponentFixture<Lib22Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
