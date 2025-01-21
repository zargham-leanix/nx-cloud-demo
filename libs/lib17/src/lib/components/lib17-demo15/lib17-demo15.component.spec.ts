import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo15Component } from './lib17-demo15.component';

describe('Lib17Demo15Component', () => {
  let component: Lib17Demo15Component;
  let fixture: ComponentFixture<Lib17Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
