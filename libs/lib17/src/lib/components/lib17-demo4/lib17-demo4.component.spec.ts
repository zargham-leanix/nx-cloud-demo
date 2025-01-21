import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo4Component } from './lib17-demo4.component';

describe('Lib17Demo4Component', () => {
  let component: Lib17Demo4Component;
  let fixture: ComponentFixture<Lib17Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
