import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo41Component } from './lib17-demo41.component';

describe('Lib17Demo41Component', () => {
  let component: Lib17Demo41Component;
  let fixture: ComponentFixture<Lib17Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
