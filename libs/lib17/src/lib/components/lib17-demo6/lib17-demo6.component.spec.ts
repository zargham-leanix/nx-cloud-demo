import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo6Component } from './lib17-demo6.component';

describe('Lib17Demo6Component', () => {
  let component: Lib17Demo6Component;
  let fixture: ComponentFixture<Lib17Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
