import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo44Component } from './lib17-demo44.component';

describe('Lib17Demo44Component', () => {
  let component: Lib17Demo44Component;
  let fixture: ComponentFixture<Lib17Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
