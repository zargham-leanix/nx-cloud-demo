import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo26Component } from './lib17-demo26.component';

describe('Lib17Demo26Component', () => {
  let component: Lib17Demo26Component;
  let fixture: ComponentFixture<Lib17Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
