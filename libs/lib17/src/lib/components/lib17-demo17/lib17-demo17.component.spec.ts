import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo17Component } from './lib17-demo17.component';

describe('Lib17Demo17Component', () => {
  let component: Lib17Demo17Component;
  let fixture: ComponentFixture<Lib17Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
