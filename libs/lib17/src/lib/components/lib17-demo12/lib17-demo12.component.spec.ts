import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo12Component } from './lib17-demo12.component';

describe('Lib17Demo12Component', () => {
  let component: Lib17Demo12Component;
  let fixture: ComponentFixture<Lib17Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
