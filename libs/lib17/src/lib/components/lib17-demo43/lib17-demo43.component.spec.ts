import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo43Component } from './lib17-demo43.component';

describe('Lib17Demo43Component', () => {
  let component: Lib17Demo43Component;
  let fixture: ComponentFixture<Lib17Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
