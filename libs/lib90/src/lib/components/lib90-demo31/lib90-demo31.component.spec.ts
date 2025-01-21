import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo31Component } from './lib90-demo31.component';

describe('Lib90Demo31Component', () => {
  let component: Lib90Demo31Component;
  let fixture: ComponentFixture<Lib90Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
