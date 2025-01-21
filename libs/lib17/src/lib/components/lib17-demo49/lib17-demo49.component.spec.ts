import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo49Component } from './lib17-demo49.component';

describe('Lib17Demo49Component', () => {
  let component: Lib17Demo49Component;
  let fixture: ComponentFixture<Lib17Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
