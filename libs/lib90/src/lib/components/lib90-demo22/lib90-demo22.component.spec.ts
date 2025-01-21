import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo22Component } from './lib90-demo22.component';

describe('Lib90Demo22Component', () => {
  let component: Lib90Demo22Component;
  let fixture: ComponentFixture<Lib90Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
