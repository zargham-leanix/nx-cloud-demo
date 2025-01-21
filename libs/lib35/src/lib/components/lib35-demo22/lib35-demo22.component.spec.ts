import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo22Component } from './lib35-demo22.component';

describe('Lib35Demo22Component', () => {
  let component: Lib35Demo22Component;
  let fixture: ComponentFixture<Lib35Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
