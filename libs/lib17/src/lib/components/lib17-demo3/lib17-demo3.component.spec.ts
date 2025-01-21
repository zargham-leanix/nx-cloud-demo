import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo3Component } from './lib17-demo3.component';

describe('Lib17Demo3Component', () => {
  let component: Lib17Demo3Component;
  let fixture: ComponentFixture<Lib17Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
