import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo19Component } from './lib92-demo19.component';

describe('Lib92Demo19Component', () => {
  let component: Lib92Demo19Component;
  let fixture: ComponentFixture<Lib92Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
