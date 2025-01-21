import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo46Component } from './lib17-demo46.component';

describe('Lib17Demo46Component', () => {
  let component: Lib17Demo46Component;
  let fixture: ComponentFixture<Lib17Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
