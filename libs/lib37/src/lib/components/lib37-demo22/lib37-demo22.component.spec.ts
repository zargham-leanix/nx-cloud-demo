import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib37Demo22Component } from './lib37-demo22.component';

describe('Lib37Demo22Component', () => {
  let component: Lib37Demo22Component;
  let fixture: ComponentFixture<Lib37Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib37Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib37Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
