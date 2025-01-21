import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo31Component } from './lib70-demo31.component';

describe('Lib70Demo31Component', () => {
  let component: Lib70Demo31Component;
  let fixture: ComponentFixture<Lib70Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
