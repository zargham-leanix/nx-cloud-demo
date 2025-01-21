import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo31Component } from './lib92-demo31.component';

describe('Lib92Demo31Component', () => {
  let component: Lib92Demo31Component;
  let fixture: ComponentFixture<Lib92Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
